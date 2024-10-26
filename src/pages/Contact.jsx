import React from 'react';
import { motion } from 'framer-motion';
import Hardhik from '../img/hardhik_image.jpg'
import Aditya from '../img/Shekar_img.jpg'
const Contact = () => {
  const projectGuide = {
    name: "Dr. Sarah Johnson",
    designation: "Project Guide",
    photo: "/api/placeholder"
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
      <div className="container mx-auto px-4 py-16">
        {/* Project Guide Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-white mb-12">Project Guide</h1>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="w-64 h-64 mx-auto mb-4 overflow-hidden shadow-xl">
              <img
                src={projectGuide.photo}
                alt={projectGuide.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white">{projectGuide.name}</h2>
            <p className="text-white opacity-90">{projectGuide.designation}</p>
          </motion.div>
        </motion.div>

        {/* Team Members Section */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-40 h-40 mx-auto mb-4 overflow-hidden shadow-lg">
                  <img
                    src={Aditya}
                    alt="Aditya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-white opacity-90">{member.designation}</p>
              </motion.div>


              <motion.div
                key={"dwefvf"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-40 h-40 mx-auto mb-4 overflow-hidden shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-white opacity-90">{member.designation}</p>
              </motion.div>

              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-40 h-40 mx-auto mb-4 overflow-hidden shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-white opacity-90">{member.designation}</p>
              </motion.div>


              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-40 h-40 mx-auto mb-4 overflow-hidden shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-white opacity-90">{member.designation}</p>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
