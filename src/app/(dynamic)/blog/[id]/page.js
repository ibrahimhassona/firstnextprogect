import Image from "next/image";
import style from "./page.module.css";


const getData = async (id) => {
  const response = await fetch(`https://dummyjson.com/posts/${id}?skip=5&limit=10`);
  return response.json();
};



// Start Dynamic Meta Data
export async function generateMetadata({ params }) {
  
  const id = params.id
 
 
  const response = await fetch(`https://dummyjson.com/posts/${id}?skip=5&limit=10`).then((res) => res.json());
  
  const res = await getData(params.id);

  return {
    title: res.title,
  }
}
// End Dynamic Meta Data
 




export default async function  Post({params}) {
  const data = await getData(params.id);




  return (
    <div className={style.container}>
          <header className={style.header}>
          <div className={style.info}>
            <h1 className={style.title}>{data.title}</h1>
            <p className={style.des}>
             {data.body.slice(0,40)}
            </p>
          </div>
          <div className={style.imageContainer}>
            <Image
              className={style.image}
              src="https://images.pexels.com/photos/4192443/pexels-photo-4192443.jpeg"
              fill={true}
              alt="post image"
            />
            <span className={style.span}>Ibrahim Hassouna</span>
          </div>
        </header>
  
        <div className={style.content}>
          <p className={style.text}>
            {data.body}
          </p>
        </div>
    </div>

        
      

  );
}
