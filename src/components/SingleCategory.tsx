import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchSingleCategory } from '../redux/reducers/categories';

const SingleCategory = () => {

  const params = useParams();
  const categoryId = Number(params.categoryId);

  const category = useAppSelector((state) => state.categoryReducer.singleCategory);
  const dispatch = useAppDispatch();

useEffect(() => {
  if (categoryId) {
    dispatch(fetchSingleCategory(categoryId));
  }
}, [dispatch, categoryId]);

if (!category) {
  return <h1>Loading</h1>;
}

  return (
    <div>
      <h1>SingleCategory</h1>
      <img src={category.image} alt="" width="500" />
      <h3>Category ID</h3>
      <p>{category.id}</p>
      <h3>Name</h3>
      <p>{category.name}</p>
      <button type="button" >Edit Category</button>
    </div>
  );
}

export default SingleCategory