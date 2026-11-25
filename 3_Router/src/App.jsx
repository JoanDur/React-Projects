import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import { CarritoProvider } from "./context/CarritoContext";
import { PRODUCTOS } from "./data/productos";
import Navbar from "./components/Navbar";
import ProductoCard from "./components/ProductoCard";
import DetalleProducto from "./components/DetalleProducto";
import CarritoVista from "./components/CarritoVista";

function Inicio() {
  return (
    <div className="card-box">
      <h1 className="page-title">Bienvenido a MiniTienda</h1>
      <p>
        Proyecto de práctica con <strong>React Router</strong> para navegar entre
        vistas y <strong>Context API</strong> para compartir el carrito en toda la app.
      </p>
      <Link to="/productos" className="enlace-detalle">
        Explorar catálogo →
      </Link>
    </div>
  );
}

function Catalogo() {
  return (
    <div>
      <h1 className="page-title">Catálogo</h1>
      <div className="catalogo-grid">
        {PRODUCTOS.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Catalogo />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/carrito" element={<CarritoVista />} />
            <Route
              path="*"
              element={
                <div className="card-box">
                  <h2 className="page-title">404 - Ruta no encontrada</h2>
                  <Link to="/" className="enlace-detalle">
                    Volver al inicio
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </CarritoProvider>
  );
}