const linkByTag = (tech: string): string | undefined => {
  switch (tech) {
    case "Node.js":
      return "https://nodejs.org";
    case "Docker":
      return "https://www.docker.com";
    case "Localization":
      return "https://flutter.dev/docs/development/accessibility-and-localization/internationalization";
    case "Next.js":
      return "https://nextjs.org";
    case "Flutter":
      return "https://flutter.dev";
    case "Flutter Web":
      return "https://flutter.dev/web";
    case "Tailwind CSS":
      return "https://tailwindcss.com";
    case "Firebase":
      return "https://firebase.google.com";
    case "Stripe":
      return "https://stripe.com";
    case "Matter.js":
      return "https://brm.io/matter-js";
    case "LLM":
      return "https://huggingface.co/models";
    case "Plaid":
      return "https://plaid.com/docs";
    case "PlayHT":
      return "https://play.ht";
    case "OpenAI":
      return "https://openai.com/docs";
    case "Google STT":
      return "https://cloud.google.com/speech-to-text";
    case "ConvexDB":
      return "https://convex.dev";
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
