import React from 'react';

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex items-center px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Hi, I'm Loc 👋</h1>
        <p className="text-xl text-indigo-400 font-semibold">
          Flutter Developer · React Learner · Cross-platform Builder
        </p>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I specialize in crafting mobile applications with Flutter, integrating modern backend tools like Firebase and Supabase, and exploring the power of AI to enhance UX.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;