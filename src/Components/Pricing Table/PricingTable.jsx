import PricingCard from '../Pricing Cards/PricingCard';
import styles from './PricingTable.module.css';

const PricingTable = () => {
    const pricingPlans = [
        { id: 1, name: "Basic", price: "₹499/mo", features: ["1 Website", "10GB Storage", "Basic Support"] },
        { id: 2, name: "Pro", price: "₹999/mo", features: ["5 Websites", "50GB Storage", "Priority Support"] },
        { id: 3, name: "Enterprise", price: "₹1999/mo", features: ["Unlimited Websites", "200GB Storage", "24/7 Support"] }
    ];

    return (
        <>
            <h1 className={styles.head}>Pricing</h1>
            <div className={styles.pricingTable}>
                {pricingPlans.map(plan => (
                    <PricingCard key={plan.id} plan={plan} />
                ))}
            </div>
        
        </>
    );
};

export default PricingTable;
