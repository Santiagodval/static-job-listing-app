
import { render } from '@testing-library/react'
import { useMediaQuery } from 'react-responsive'

const getSVX = (filters, deleteFilter) => {
    let content = []
    for (const key in filters) {

        if (!Array.isArray(filters[key]) && filters[key] != "") {
            content.push(<li className="bg-LightGrayishCyanB rounded-md flex mr-2 my-1 pl-2">{filters[key]}
            <button onClick={deleteFilter} id={filters[key]} className="bg-DesaturatedDarkCyan rounded-r-md px-1 ml-1">
                <img src="images/icon-remove.svg"/>
            </button></li>)
        } else if(Array.isArray(filters[key])){
            filters[key].map(element => {
                content.push(<li className="bg-LightGrayishCyanB rounded-md flex mr-2 my-1 pl-2">{element}
                <button onClick={deleteFilter} id={element} className="bg-DesaturatedDarkCyan rounded-r-md px-1 ml-1 hover:bg-VeryDarkGrayishCyan">
                    <img src="images/icon-remove.svg"/>
                </button></li>)
            })
        }
    }

    return content
}

const renderImg = (isLarge) => {
    let content = [];

    if(isLarge){content.push(<img src="images/bg-header-desktop.svg" className="bg-DesaturatedDarkCyan min-w-[100vw]"/>)}else {content.push(<img src="images/bg-header-mobile.svg"className="bg-DesaturatedDarkCyan min-w-[100vw]"/>)}

    return content;
}

const renderFilters=(filters, deleteFilter, clearFilters)=>{
    let content = [];

    console.log(filters)

    if(JSON.stringify(filters) !== JSON.stringify({role: "", level: "", languages: [], tools: []})){
            content.push(<div className="flex flex-sb width-[80] bg-white shadow m-8 p-4 rounded-md translate-y-[-60px] justify-between sm:max-w-[70vw]">
                <ul className="flex flex-wrap">
                    {getSVX(filters) !== [] && getSVX(filters, deleteFilter)}
                </ul>
                <button onClick={clearFilters}>Clear</button>
            </div>)
    }
    return content;
}

const Header = ({ filters, deleteFilter, clearFilters }) => {

    let isLarge = useMediaQuery({
        query: '(min-width: 640px)'
      })

    let df = {role: "", level: "", languages: [], tools: []};

    return (
        <div className="mb-8 font-fontFamily flex flex-col items-center">
            {renderImg(isLarge)}
            {renderFilters(filters, deleteFilter,clearFilters)
            }
        </div>
    );
}

export default Header;