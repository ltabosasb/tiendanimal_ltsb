import React, { useState } from "react";
import UserInfoCard from "../components/UserInfoCard";

const MisDatosForm = () => {
    const [ formData, setFormData ] = useState( {
        name: '',
        email: '',
        phone: '',
    } );

    const [ errors, setErrors ] = useState( {} )

    const validateForm = () => {
        let formIsValid = true
        let errors = {}

        if ( !formData.name.trim() ) {
            errors.name = 'Se requiere el nombre'
            formIsValid = false
        }

        if ( !formData.email.trim() ) {
            errors.email = 'Correo electronico es requerido'
            formIsValid = false
        } else if ( !/\S+@\S+\.\S+/.test( formData.email ) ) {
            errors.email = 'Correo electronico es requerido';
            formIsValid = false;
        }

        if ( !formData.phone.trim() ) {
            errors.phone = 'Se requiere teléfono';
            formIsValid = false;
        } else if ( !/^\d{10}$/.test( formData.phone ) ) { // Simple regex for 10 digit numbers
            errors.phone = 'Se requiere teléfono';
            formIsValid = false;
        }

        setErrors( errors )
        return formIsValid
    }

    const handleChange = ( e ) => {
        const { name, value } = e.target;
        setFormData( prevState => ( { ...prevState, [ name ]: value, } ) );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( validateForm() ) {
            sessionStorage.setItem('userData', JSON.stringify(formData));
            alert( 'Information saved!' );
            return (<UserInfoCard />)
        }
        // Here, implement your logic to save the data, for example, sending it to a backend server
    };

    // const userDataExists = !!localStorage.getItem('userData')

    return (
        <form className="mis-datos-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">
                    Nombre: <span className="required-asterisk">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Nombre"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Email: <span className="required-asterisk">*</span>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="phone">
                    Teléfono: <span className="required-asterisk">*</span>
                </label>
                <input
                    type="tel"
                    placeholder="Teléfono"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-guardar-datos">Guardar</button>
        </form>
    );
};

export default MisDatosForm