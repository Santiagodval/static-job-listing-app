import { useState, useEffect } from "react"
import jobs from "../data.json" //gets the data from the json
import { useMediaQuery } from 'react-responsive'


const JobListComponent = ({ filters, addFilter }) => {

    const isLarge = useMediaQuery({
        query: '(min-width: 640px)'
      })

    const isValid = (job) => {
        let e = true;

        // si uno de los filtros no corresponde con la propiedad correspondiente entonces no pasa el filtro

        //si el rol del filtro no está vacío y no sea igual al rol del trabajo entonces se pone como false el filtro
        if (filters.role !== "" && job.role !== filters.role) {
            e = false;
        }
        if (filters.level !== "" && job.level !== filters.level) {
            e = false;
        }


        //si hay filtro por lenguajes y la condición no es falsa de antes, entonces se procede
        //primero se recorre uno a uno los lenguajes del filtro, y en cada lenguaje del filtro
        //se setea la condición a falsa, luego se recorren los lenguajes de los tabajos, donde si 
        //el lenguaje del trabajo y el lenguaje del filtro son iguales y además e no es verdadera
        //entonces e es igual a verdadera

        if (filters.languages.length > 0 && e !== false) {
            filters.languages.forEach(filterlanguage => {
                //js
                e = false;
                job.languages.forEach(joblanguage => {
                    if (joblanguage === filterlanguage && !e) {
                        e = true;
                    }

                })
            })
        }

        //si hay filtro por herramientas y la condición no es falsa de antes, entonces se procede
        //primero se recorre uno a uno las herramientas del filtro, y en cada herramienta del filtro
        //se setea la condición a falsa, luego se recorren las herramientas de los tabajos, donde si 
        //la herramienta del trabajo y la herramienta del filtro son iguales y además e no es verdadera
        //entonces e es igual a verdadera

        if (filters.tools.length > 0 && e !== false) {
            filters.tools.forEach(filtertool => {
                e = false;
                job.tools.forEach(jobtool => {
                    if (jobtool === filtertool && !e) {
                        e = true;
                    }
                })
            })
        }

        return e;
    }

    

    return (
        <div>
            {jobs.filter(job => isValid(job))
                .map(job => {

                    return (<div key={job.id} className="grid relative font-fontFamily font-medium text-md 
                    sm:grid-cols-6 sm:grid-rows-3 shadow-xl mt-0 ml-8 mr-8 mb-8 p-4 rounded-md sm:max-w-[70vw]">
                            <img src={job.logo}
                                className="w-12 absolute top-[-23px] sm:static left-4 sm:row-start-1 sm:row-span-3 sm:max-h-24 sm:w-auto" />
                            <div className="CompanyFlags mt-4 sm:mt-0 sm:row-start-1 sm:row-span-1 sm:col-start-2 sm:col-span-2 flex mb-2 h-7 sm:max-h-0 ">
                                <h4 className="company text-DesaturatedDarkCyan p-1 sm:p-0">{job.company}</h4>
                                {job.new && <div className="bg-DesaturatedDarkCyan px-[8px] rounded-full ml-2 p-1 text-white h-6">NEW!</div>}
                                {job.featured && <div className="bg-VeryDarkGrayishCyan px-[8px] rounded-full ml-2 p-1 text-white h-6">FEATURED</div>}
                            </div>
                            <h3 className="PositionName text-DesaturatedDarkCyan flex mb-2 sm:row-start-2 sm:row-span-1 sm:col-start-2 sm:col-span-2 sm:my-0  sm:max-h-0">
                                {job.position}
                            </h3>
                            <div className="Position grid row-start-4 row-span-1 border-t-2 border-DarkGrayishCyan pt-5 
                            sm:flex sm:row-start-2 sm:row-span-1 sm:col-start-4 sm:col-span-3 sm:border-none sm:py-0 sm:max-h-0">

                                <ul className="flex flex-wrap  sm:max-h-0">
                                    <li className="bg-LightGrayishCyanF rounded-sm p-1 bold text-DesaturatedDarkCyan mb-2 mr-3 hover:bg-DesaturatedDarkCyan hover:text-white">
                                        <button className="1" onClick={addFilter}>{job.role}</button></li>
                                    <li className="bg-LightGrayishCyanF rounded-sm p-1 bold text-DesaturatedDarkCyan mb-2 mr-3 hover:bg-DesaturatedDarkCyan hover:text-white">
                                        <button className="2" onClick={addFilter}>{job.level}</button></li>
                                    {job.languages.map((language, i) => {
                                        return (
                                            <li key={i} className="bg-LightGrayishCyanF rounded-sm p-1 bold text-DesaturatedDarkCyan mb-2 mr-3 hover:bg-DesaturatedDarkCyan hover:text-white">
                                                <button className="3" onClick={addFilter}>{language}</button></li>
                                        );
                                    })}
                                    {job.tools.map((tool, i) => {
                                        return (
                                            <li key={i} className="bg-LightGrayishCyanF rounded-sm p-1 bold text-DesaturatedDarkCyan mb-2 mr-3 hover:bg-DesaturatedDarkCyan hover:text-white">
                                                <button className="4" onClick={addFilter}>{tool}</button></li>
                                        );
                                    })}
                                </ul>

                            </div>
                            <div className="Data sm:row-start-3 sm:row-span-1 sm:col-start-2 sm:col-span-2 flex pb-3 sm:pb-0 text-DarkGrayishCyan sm:my-0">
                                <ul className="flex">
                                    <li className="postedTime">{job.postedAt}</li>
                                    <li className="contract before:content-['.'] before:relative before:bottom-1 before:-left-1 ml-2">{job.contract}</li>
                                    <li className="location before:content-['.'] before:relative before:bottom-1 before:-left-1 ml-2">{job.location}</li>
                                </ul>
                            </div>
                    </div>)
                })}
        </div>
    )
}

export default JobListComponent;