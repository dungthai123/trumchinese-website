import BlogDetailsContent from "@/components/Blog/BlogDetailsContent"; 
import Footer from "@/components/Layout/Footer"; 
import Navbar from "@/components/Layout/Navbar";

export default function BlogDetailsPage() {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />

        <hr className="border-[#E3E3E3]" />

        <BlogDetailsContent />
      </div>

      <Footer />
    </>
  );
}
