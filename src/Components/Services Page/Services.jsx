import ServiceCard from '../Service Card/ServiceCard';
import styles from './Services.module.css';

const Services = ( {ServiceRef} ) => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Build modern, scalable, and high-performance websites tailored to your needs."
        },
        {
            id: 2,
            title: "App Development",
            description: "Create user-friendly and feature-rich mobile applications for iOS and Android."
        },
        {
            id: 3,
            title: "SEO Optimization",
            description: "Boost your website's search engine ranking with expert SEO strategies."
        },
        {
            id: 4,
            title: "Digital Marketing",
            description: "Expand your brand's reach with data-driven digital marketing solutions."
        },
        {
            id: 5,
            title: "UI/UX Design",
            description: "Design intuitive and visually appealing interfaces for websites and apps."
        },
        {
            id: 6,
            title: "Content Writing",
            description: "Craft high-quality, engaging content to enhance brand communication."
        },
        {
            id: 7,
            title: "Cybersecurity",
            description: "Protect your online assets with advanced cybersecurity solutions."
        },
        {
            id: 8,
            title: "Cloud Computing",
            description: "Leverage cloud technology for scalable and secure business operations."
        },
        {
            id: 9,
            title: "AI & Machine Learning",
            description: "Implement AI-driven solutions to optimize business processes."
        },
        {
            id: 10,
            title: "E-commerce Solutions",
            description: "Develop and optimize online stores for a seamless shopping experience."
        }
    ];
    
    return (
        <>
            <h1 ref={ServiceRef} className={styles.head}>Services</h1> 
            <div className={styles.services}>
               {
                    services.map((s)=> <ServiceCard key={s.id} {...s} />
                    )
               }
            </div> 
        </>
    )
}

export default Services;
