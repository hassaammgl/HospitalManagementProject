export const GET = async () => {
  return new Response("Hello, Next.js!");
};

export const POST = async (req: Request) => {
  const { name, email } = await req.json();
  return new Response(`Hello, ${name}! Your email is ${email}.`);
};
