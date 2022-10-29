import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";


import {Button} from './Button/Button'
import FetchImages from './GalleryApi/GalleryApy'
import {SearchBar} from './Searchbare/Serchbar'
import {ImageGallery} from './ImageGallery/ImageGallery'


export const App = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (input) {
      setLoading(true);

      FetchImages(page, input)
        .then(imgArr => {
          if (page > 1) setData(prevData => [...prevData, ...imgArr.hits]);
          else setData(imgArr.hits);
        })
        .catch(error => console.log(error))
        .finally(setLoading(false));
      return;
    }
  }, [input, page]);

  //  useEffect(() => {
  //   setLoading( true );

  //   FetchImages(page, input)
  //     .then(imgArr => {
  //       setData(imgArr.hits);
  //       setLoading(false)
  //     })
  //     .catch(error => { console.log(error); setLoading( false ) })
       
  // }, [input])

  // useEffect(() => {
  //   setLoading( true );

  //     FetchImages(page, input)
  //       .then(imgArr => {
         
  //         setData(prevData => [...prevData, ...imgArr.hits]);
  //         setLoading(false)
  //           })
  //         .catch(error => { console.log(error); setLoading( false ) })
       
  //    }, [page])
  
  const onSubmit = (input) => {
    setInput(input);
    setPage(1);  
  };
  
  
  const onClick = e => {
    if (e) {
      setPage(prevPage => prevPage + 1)
    }
  }


  
    
  return (
    <>
      <SearchBar onSub={onSubmit} />
      {loading && (
          <ThreeCircles
            height="100"
            width="100"
            color="#2732ac"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
       )} 
      {data && <ImageGallery inputData={data} />}      
      {input && !loading && <Button handleClick={onClick} />}
    <ToastContainer/>
    </>
    );
    }

