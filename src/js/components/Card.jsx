import React from "react";

const Card = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5 m-20">
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/200/300
" className="card-img-top" alt="..." />
            <div className="card-body  text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer text-center">
            <button type="button" className="btn btn-primary">Find out More!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/200/300
" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer text-center">
            <button type="button" className="btn btn-primary">Find out More!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/200/300
" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer text-center">
            <button type="button" className="btn btn-primary">Find out More!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://picsum.photos/200/300
" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer text-center">
            <button type="button" className="btn btn-primary">Find out More!</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;