import React, { Fragment, useContext, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CarrouselSection from '../CarrouselSection/CarrouselSection'
import Result from '../Result/Result'
import { getData } from '../../Services/getHeros';
import { HeroeContext } from '../../Contexts/HeroesContext';
import './Search.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function Search() {

    const {setCard, setResult, card, setLoading, setShowCarrousel} = useContext(HeroeContext);

   
    //Function get data from API 
    const getValues = async (values) => {
        
        setLoading(true)

        setShowCarrousel(true)
       
        const error = await getData(setCard, values);

        setLoading(false)

        if (error) {

            setShowCarrousel(false)
            setResult(0) 

        } else {   

            setLoading(true)
            getData(setCard, values)
            setLoading(false)
        }
   
    }



    useEffect(() => {    
     
        setResult(card.length)
     
    }, [card, setResult])




    return (
        <Fragment>
            
            <Formik

                initialValues={{
                    name: '',

                }}

                validate={(values) => {
                    let errors = {}

                    //Name validation
                    if (!values.name) {
                        errors.name = 'Please, submit a name'
                    } else if (values.name === "") {
                        errors.name = 'Please, submit a name'
                    }
                    return errors;

                }}

                onSubmit={(values) => {
                    getValues(values)
                    values.name = ''; 
                }}
            >
                {({ errors }) => (

                    <Fragment>

                        <div className="title-head">
                            <h1>SUPER HERO APP</h1>
                        </div>

                        <Form className="container">
                            <div className="row height d-flex justify-content-center align-items-center">
                                <div className="col-md-8">
                                    <div className="search">
                                        <i className="fa fa-search"></i>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            placeholder="Search a character"
                                            id="name"
                                            name="name"
                                        />
                                        <ErrorMessage name="name" component={() => (
                                            <span className="text-danger">
                                                {errors.name}
                                            </span>
                                        )} />
                                        <button className="button" type="submit">Search</button>
                                    </div>
                                </div>
                            </div>
                        </Form>



                    </Fragment>
                )}
            </Formik>

             <Result />                               
            
            <CarrouselSection />

        </Fragment>
    )
}

export default Search
