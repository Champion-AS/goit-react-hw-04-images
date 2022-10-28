import 'react-toastify/dist/ReactToastify.css';
import { ThreeCircles } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";


import Button from './Button/Button'
import FetchImages from './GalleryApi/GalleryApy'
import SearchBar from './Searchbare/Serchbar'
import ImageGallery from './ImageGallery/ImageGallery'


export const App = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    setLoading( true );

    FetchImages(page, input)
      .then(imgArr => {
        setData(imgArr.hits);
        setLoading(false)
      })
      .catch(error => { console.log(error); setLoading( false ) })
       
  }, [input])

  useEffect(() => {
    setLoading( true );

      FetchImages(page, input)
        .then(imgArr => {
         
          setData(prevData => [...prevData, ...imgArr.hits]);
          setLoading(false)
            })
          .catch(error => { console.log(error); setLoading( false ) })
       
     }, [page])
  
  const onSubmit = (input, page) => {
    setInput(input),
    setPage(page: 1),  
  }
  
  
  const onClick = e => {
    if (e) {
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
        }
      })
    }
  }


  
    
  return (
    <>
      <SearchBar onSub={this.onSubmit} />
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
      {input && !loading && <Button handleClick={this.onClick} />}
    <ToastContainer/>
    </>
    );
    }

