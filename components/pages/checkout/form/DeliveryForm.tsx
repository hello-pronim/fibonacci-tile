import { useForm } from 'react-hook-form';
import styles from "./styles.module.scss";

const DeliveryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.twoItemRow}>
                <input type="text" placeholder="Address" {...register("Address", {required: true, maxLength: 80})} />
                <input type="text" placeholder="Suburb" {...register("Suburb", {required: true, maxLength: 100})} />
            </div>
            <div className={styles.threeItemRow}>
                <input type="text" placeholder="Postcode" {...register("Postcode", {required: true, maxLength: 80})} />
                <select {...register("State", { required: true })}>
                    <option value="">State</option>
                    <option value="interiorDesigner">Interior Designer</option>
                    <option value="architect">Architect</option>
                    <option value="builder">Builder</option>
                    <option value="installer">Installer</option>
                    <option value="stonemason">Stonemason</option>
                    <option value="other">Other</option>
                </select>
                <select {...register("Country", { required: true })}>
                    <option value="">Country</option>
                    <option value="interiorDesigner">Interior Designer</option>
                    <option value="architect">Architect</option>
                    <option value="builder">Builder</option>
                    <option value="installer">Installer</option>
                    <option value="stonemason">Stonemason</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className={styles.oneItemRow}>
                <select {...register("job", { required: true })}>
                    <option value="">I’m a...</option>
                    <option value="interiorDesigner">Interior Designer</option>
                    <option value="architect">Architect</option>
                    <option value="builder">Builder</option>
                    <option value="installer">Installer</option>
                    <option value="stonemason">Stonemason</option>
                    <option value="other">Other</option>
                </select>
                <textarea placeholder='Additional Information/Special Requirements' {...register("information", { required: true })}>
                </textarea>
            </div>
            <div className={styles.infoText}>
                <p><strong>NB:</strong> We can not send samples to PO Boxes.</p>
            </div>
            <div className={styles.details}>
                <p><strong>All Sample Requests will be actioned within 24 hours of receiving all of the required information.</strong></p>
                <p>As part of our commitment to the environment and keeping you up-to-date with the latest products 
                and colours in our range we do not provide samples for libraries. Instead we encourage our customers 
                to view our range and request samples as required, per project and take advantage of our same-day 
                dispatch express service.</p>
            </div>
        </form>
    )
}

export default DeliveryForm;
