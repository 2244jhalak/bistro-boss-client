/* eslint-disable react/prop-types */


const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center my-8 w-4/12">
            <p className="text-yellow-600 italic mb-2">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;