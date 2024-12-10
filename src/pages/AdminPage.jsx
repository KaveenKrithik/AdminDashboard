import React from 'react';
import ProductForm from '../components/ProductForm/ProductForm';
import ProductList from '../components/ProductList/ProductList';
import PageTransition from '../components/Animations/PageTransition';
import './AdminPage.css';

function AdminPage() {
  return (
    <PageTransition>
      <div className="admin-page">
        <h1>Admin Dashboard</h1>
        <ProductForm />
        <ProductList />
      </div>
    </PageTransition>
  );
}

export default AdminPage;


