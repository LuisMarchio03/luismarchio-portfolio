// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AcademicArticlesSection } from './components/AcademicArticlesSection';
import { BlogSection } from './components/BlogSection';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sobre');
  const chartRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const option = {
      animation: false,
      backgroundColor: 'transparent',
      radar: {
        indicator: [
          { name: 'React', max: 100 },
          { name: 'TypeScript', max: 100 },
          { name: 'Node.js', max: 100 },
          { name: 'Golang', max: 100 },
          { name: 'DevOps', max: 100 },
          { name: 'C#', max: 100 }
        ],
        shape: 'circle',
        splitNumber: 4,
        axisName: {
          color: 'rgb(238, 197, 102)',
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.1)'
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(107, 47, 217, 0.05)', 'rgba(107, 47, 217, 0.1)']
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.3)'
          }
        }
      },
      series: [{
        name: 'Habilidades',
        type: 'radar',
        lineStyle: {
          width: 2,
          color: 'rgb(99, 102, 241)'
        },
        data: [{
          value: [80, 90, 80, 70, 60, 60],
          name: 'Habilidades',
          symbol: 'circle',
          symbolSize: 6,
          itemStyle: {
            color: 'rgb(99, 102, 241)'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(99, 102, 241, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(107, 47, 217, 0.3)'
              }
            ])
          }
        }]
      }]
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Hero Section */}
      <HeroSection
        setActiveTab={setActiveTab}
      />

      {/* Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection
          chartRef={chartRef}
        />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        {/* Academic Articles Section */}
        <AcademicArticlesSection />

        {/* Blog Section */}
        {/* <BlogSection /> */}

        {/* Contact Section */}
        <ContactSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App
