import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function BlogPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <BlogPost /> 
      </div>

      <Footer />
    </>
  );
}
