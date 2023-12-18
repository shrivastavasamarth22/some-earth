const linkByTag = (tech: string): string | undefined => {
    switch (tech) {
        case "Node.js":
            return "https://nodejs.org";
        case "Next.js":
            return "https://nextjs.org";
        case "Tailwind CSS":
            return "https://tailwindcss.com";
        case "Firebase":
            return "https://firebase.google.com";
        case "Stripe":
            return "https://stripe.com";
        case "LLM":
            return "https://huggingface.co/models";
        case "OpenAI":
            return "https://openai.com/docs";
        case "ConvexDB":
            return "https://convex.dev";
        case "MongoDB":
            return "https://www.mongodb.com";
        case "Clerk":
            return "https://clerk.dev";
        case "Bootstrap":
            return "https://getbootstrap.com";
        case "Python":
            return "https://www.python.org";
        case "Flask":
            return "https://flask.palletsprojects.com";
        case "SQLAlchemy":
            return "https://www.sqlalchemy.org";
        case "Jinja2":
            return "https://jinja.palletsprojects.com";
        case "React":
            return "https://reactjs.org";
        case "React Native":
            return "https://reactnative.dev";
        default:
            return;
    }
};

export default linkByTag;
