import { FC } from "react";

type Props = {
    currentPage: number,
    totalPages: number,
    handlePrevious: () => void,
    handleNext: () => void,
    postsPerPage: number,
}

const Pagination: FC<Props> = ({currentPage, totalPages, handleNext, handlePrevious, postsPerPage}) => {
    return (
        <nav aria-label="Page navigation" className="flex justify-center items-center my-4">
            <ul className="inline-flex space-x-2">
                <li>
                    <button onClick={() => handlePrevious()} disabled={currentPage <= 0} className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
                </li>
                <li className="text-white items-center my-auto">{currentPage}</li>
                <li>
                    <button onClick={() => handleNext()} disabled={currentPage >= Math.ceil(totalPages / postsPerPage) - 1} className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-15 rounded-full focus:shadow-outline hover:bg-blue-100">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
                </li>
            </ul>
            </nav>
    )
}

export default Pagination