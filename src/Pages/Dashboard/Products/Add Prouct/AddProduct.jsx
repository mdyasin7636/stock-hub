import { useForm } from 'react-hook-form';
import { useGetCategoryQuery } from '../../../../features/api/apiSlice';
import './AddProduct.css'

const AddProduct = () => {
      const { register, handleSubmit } = useForm();
      const { data } = useGetCategoryQuery()
      const onSubmit = data => console.log(data);
      return (
            <div className='ml-16 mt-16'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='md:flex justify-center gap-16'>
                              <div>
                                    <div className='md:flex items-center gap-12'>
                                          <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                      <span className="label-text">Name*</span>
                                                </label>
                                                <input type="text" {...register("name", { required: true, maxLength: 120 })} placeholder="Enter Name Product" className="input input-bordered bg-slate-100 shadow-md shadow-slate-400 w-full max-w-xs" />
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                      <span className="label-text">Code Product*</span>
                                                </label>
                                                <input type="text" {...register("product", { required: true })} placeholder="Code Product" className="input input-bordered shadow-md shadow-slate-400 bg-slate-100 w-full max-w-xs" />
                                          </div>
                                    </div>
                                    <div className='md:flex items-center gap-12 my-4'>
                                          <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                      <span className="label-text">Brand*</span>
                                                </label>
                                                <select defaultValue="Choose Brand" {...register("brand", { required: true })} className="select select-bordered shadow-md shadow-slate-400 bg-slate-100">
                                                      <option disabled>Choose Brand</option>
                                                      <option>Adidas</option>
                                                      <option>Colgate</option>
                                                      <option>Samsung</option>
                                                      <option>Huawei</option>
                                                </select>
                                          </div>
                                          <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                      <span className="label-text">Category*</span>
                                                </label>
                                                <select defaultValue="Choose Category" {...register("category", { required: true })} className="select select-bordered shadow-md shadow-slate-400 bg-slate-100">
                                                      <option disabled>Choose Category</option>
                                                      {data?.map(item => <option key={item._id}>{item.categoryName}</option>)}
                                                </select>
                                          </div>
                                    </div>
                                    <div className='md:flex items-center gap-12 my-4'>
                                          <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                      <span className="label-text">Order Tax*</span>
                                                </label>
                                                <input type="text" {...register("tax", { required: true })} placeholder="Order Tax" className="input input-bordered shadow-md shadow-slate-400 bg-slate-100 w-full max-w-xs" />
                                          </div>
                                          <div className="form-control w-full mt-4 max-w-xs">
                                                <label className="label">
                                                      <span className="label-text">Tax Type*</span>
                                                </label>
                                                <select defaultValue="Tax Type" {...register("taxType", { required: true })} className="select select-bordered shadow-md shadow-slate-400 bg-slate-100">
                                                      <option disabled>Tax Type</option>
                                                      <option>Exclusive</option>
                                                      <option>Inclusive</option>
                                                </select>
                                          </div>
                                    </div>
                                    <div className="form-control mt-4">
                                          <label className="label">
                                                <span className="label-text">Description*</span>
                                          </label>
                                          <textarea {...register("description", { required: true })} className="textarea shadow-md shadow-slate-400 bg-slate-100 textarea-bordered w-full max-w-xs h-32" placeholder="A few words..."></textarea>
                                    </div>
                                    <input className='btn btn-sm mt-4 bg-violet-500 text-white' type="submit" value="Submit" />
                              </div>
                              <div>
                                    <div className='card'>
                                          <div className='top'>
                                                <p>Drag & Drop image uploading</p>
                                          </div>
                                          <div className='drag-area'>
                                                
                                          </div>
                                          <div className='container'>
                                                <div className='image'>
                                                      <span className='delete'>&times;</span>
                                                </div>
                                                <img src="" alt="" />
                                          </div>
                                          <button type='button'>
                                                Upload
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </form>
            </div>
      );
};

export default AddProduct;