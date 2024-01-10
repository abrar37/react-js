import React from 'react'

export function Card({heading="Laptop", cardText="Laptops Discription", imageLink="https://source.unsplash.com/800x600/?laptop"}) {
  // console.log(props)
  return (
    <div className="w-[300px] rounded-md border">
      <img
        // src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        src={imageLink}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">About {heading}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {cardText}
        </p>
        <a
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          href={`https://source.unsplash.com/800x600/?laptop,${imageLink}/`}
          target='_blank'
        >
          Read
        </a>
      </div>
    </div>
  )
}

export default Card