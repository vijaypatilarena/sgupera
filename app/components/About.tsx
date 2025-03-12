export default function About() {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About The Championship</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
            The PERA Premier Championship is a state-level inter-university sports meet organized by the Preeminent Education and Research Association (PERA) bringing together talented athletes from across the region to compete in different sports disciplines.
            </p>
            <p className="text-lg mb-6">
              With an attractive prize pool, this competition represents an incredible opportunity for athletes to showcase their skills and compete at the highest level.
            </p>
            <p className="text-lg">
              Join us in April 2025 for an unforgettable celebration of sporting excellence, competitive spirit, and athletic achievement.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Sports"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}