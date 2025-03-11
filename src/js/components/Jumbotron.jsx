import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">
                React te permite crear interfaces de usuario a partir de piezas individuales llamadas componentes. Crea tus propios componentes de React como , y . Luego, combínalos en pantallas, páginas y aplicaciones completas.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;