import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='Featured-Item text-white bg-fixed my-10 pt-3'>
            <SectionTitle
            heading={'from our MEnu'}
            subHeading={'Check it out'}
            ></SectionTitle>
            <div className='flex items-center gap-x-10 px-28 bg-slate-500 bg-opacity-60 pb-10 pt-10'>
                <img className='w-96' src={FeaturedImg} alt="" />
                <div>
                    <p>March 10,2023</p>
                    <h4 className='text-2xl uppercase'>Where can I get some?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit placeat unde quis at voluptate temporibus ut, autem doloremque molestias, exercitationem rem qui voluptas quia est consectetur maiores ipsum minus praesentium quam. Animi dicta sunt ab hic iste autem quibusdam voluptatem debitis veniam, nostrum in quasi commodi voluptates soluta aliquid provident.</p>
                    <button className='btn btn-outline uppercase border-0 border-white text-white font-semibold border-b-4'>read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;