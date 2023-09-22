
const DragImage = ({ getRootProps, getInputProps, isDragActive, images }) => {
  return (
    <div  {...getRootProps({
      className: 'drag-area mb-5'
    })}>
      <input {...getInputProps()} />
      {
        images.length > 0 ?
          <div>
            <img src={images[0]} className='h-24 w-32 mx-auto text-center object-contain rounded-md' alt="" />
            <p className="text-center">Drag files here, <br /> or click to select files</p>
          </div>
          : isDragActive ?
            <p>Drop the files here ...</p> :
            <p className="text-center">Drag files here, <br /> or click to select files</p>

      }
    </div>
  )
};
export default DragImage;