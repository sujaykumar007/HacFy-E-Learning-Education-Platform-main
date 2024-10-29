import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const ContactMe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(formRef.current);
    formData.append("access_key", "8ada4934-fdf2-43d7-8dcf-d8c81948d71c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        formRef.current.reset();
        setForm({ name: '', email: '', message: '' }); // Reset form state
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='lg:pl-80 xl:mt-12 xl:flex-row w-full flex-col-reverse flex gap-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className='bg-white px-4 py-6 placeholder:text-gray-700 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className='bg-white px-4 py-6 placeholder:text-gray-700 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className='bg-white px-4 py-6 placeholder:text-gray-700 text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type="submit" className='py-3 px-8 bg-red-600 rounded-lg outline-none w-fit text-bold shadow-md shadow-primary'>
            {loading ? 'Sending...' : 'Send'}
          </button>
          <span className='mt-4 text-center text-white'>{result}</span>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
