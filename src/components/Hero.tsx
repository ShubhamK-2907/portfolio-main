import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 2 } }
    };

    return (
        <section className='relative w-full h-screen mx-auto'>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#840c24]' />
                    <div className='w-1 sm:h-80 h-40 red-gradient' />
                </div>
                <div>
                    <motion.h1
                        className={`${styles.heroHeadText} text-white`}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        Hi, I'm <span className='text-[#DC143C]'>Shubham</span>
                    </motion.h1>
                    <motion.p
                        className={`${styles.heroSubText} mt-2 text-white-100`}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        Full Stack Developer | Marketing Measurements | Web3 Enthusiast
                        <br className='sm:block hidden' />
                    </motion.p>
                </div>
            </div>

            <ComputersCanvas />
        </section>
    );
};

export default Hero;
