import Layout from "@/components/layout/Layout";
import CourseCard from "@/components/ui/CourseCard";

const courses = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js. Build responsive, dynamic websites and web applications from scratch.",
    duration: "12 weeks",
    students: 2340,
    rating: 4.8,
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Learn data analysis, machine learning, and statistical modeling using Python, pandas, and scikit-learn to extract insights from complex datasets.",
    duration: "16 weeks",
    students: 1850,
    rating: 4.7,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Discover SEO, social media marketing, content strategy, and analytics to grow your online presence and drive measurable business results.",
    duration: "8 weeks",
    students: 3120,
    rating: 4.6,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Create stunning visual designs using Adobe Creative Suite, typography principles, and brand identity development techniques for digital and print media.",
    duration: "10 weeks",
    students: 1960,
    rating: 4.9,
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Build native mobile apps for iOS and Android using React Native, Flutter, or native development frameworks with modern development tools.",
    duration: "14 weeks",
    students: 1450,
    rating: 4.7,
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive, industry-focused courses designed to give you the practical skills 
              and knowledge needed to excel in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Our Courses Special?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Project-Based Learning</h3>
                <p className="text-muted-foreground">
                  Build real projects that you can showcase in your portfolio and use to demonstrate your skills to employers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of experience who bring real-world insights to the classroom.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Career Support</h3>
                <p className="text-muted-foreground">
                  Get job placement assistance, resume reviews, and interview preparation to help you land your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;