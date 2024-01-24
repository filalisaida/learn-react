

function Products() {
  let title ="learn how to create apps with reactjs"
let showList = true;
  let products = [
    { 
    id: 1,
    label: "iphone 15",
    price: 3200, 
    },
    {
      id: 2,
      label: "samsung",
      price: 1200,   
    },
  ]
  return (
    <div>
    <h1>{title}</h1>
    <p>Lorem ipsum dolor sit
     amet consectetur adipisicing
      elit. Sed error, neque
       minima aspernatur rerum 
       quia reprehenderit vel 
       labore ullam laudantium!
        Sed delectus ducimus 
        
        nihil quaerat, culpa 
        nulla voluptate obcaecati
         aliquam.</p>
         {showList ? "show list of products" : "none"}
         <ul>
         
         {products.map((product , index) => (
          <li key={index}>{ product.label}</li>
          ))}

      
         
         </ul>
    </div>
  )
}

export default Products