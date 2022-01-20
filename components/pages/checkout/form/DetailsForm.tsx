import { useForm } from 'react-hook-form';
import styles from "./styles.module.scss";

const DetailsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.oneItemRow}>
                <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            </div>
            <div className={styles.twoItemRow}>
                <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            </div>
            <div className={styles.twoItemRow}>
                <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                <input type="tel" placeholder="Contact number" {...register("Contact number", {required: true, minLength: 6, maxLength: 12})} />
            </div>
            <div className={styles.twoItemRow}>
                <select {...register("job", { required: true })}>
                    <option value="">I’m a...</option>
                    <option value="interiorDesigner">Interior Designer</option>
                    <option value="architect">Architect</option>
                    <option value="builder">Builder</option>
                    <option value="installer">Installer</option>
                    <option value="stonemason">Stonemason</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </form>
    )
}

export default DetailsForm;
