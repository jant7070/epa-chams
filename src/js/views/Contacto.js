import React from "react";
import "../../styles/index.css"

export const Contacto = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="contacto mt-3">Contactanos!!!</h1>
            <div className="col-lg-7 m-4">
                <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="lg-form">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" className="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="lg-form">
                                <label htmlFor="apellido">Apellido</label>
                                <input type="text" id="apellido" name="apellido" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="lg-form">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="lg-form">
                                <label htmlFor="message">Mensaje</label>
                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2 rounded rounded-pill">Enviar</button>
                </form>
            </div>
        </div>
    )
}