import React, { createContext, useState} from 'react';

export const CatImageContext = createContext();

export const CatImageProvider = ({children})=>{
    const [catImageUrl, setCatImageUrl] = useState("");
    const [error, setError]=useState(null);
    const loadCatImage = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
          .then((response) => response.json())
          .then((data) => {
            setCatImageUrl(data[0].url);
            setError(null); // Reset any previous error
          })
          .catch((error) => {
            console.error("Error fetching cat image:", error);
            setError("Failed to load cat image. Please try again.");
          });
      };

      React.useEffect(() => {
        loadCatImage();
      }, []);
      return(
        <CatImageContext.Provider value={{catImageUrl, loadCatImage, error}}>
            {children}
        </CatImageContext.Provider>
      )
}