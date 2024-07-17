export const POST = async (req: Request) => {
    const { name, email } = await req.json();
    return new Response(`Hello, ${name}! Your email is ${email}.`);
}