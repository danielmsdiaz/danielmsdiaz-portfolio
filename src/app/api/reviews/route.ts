import { NextResponse } from "next/server";
import { readReviews, addReview, reviewsLength, deleteReview, editReview } from '@/lib/reviewService';

//api gemini
import { GoogleGenerativeAI } from "@google/generative-ai"

// GET: Retorna todos os reviews
export async function GET() {
    try {
        const reviews = readReviews();
        return NextResponse.json(reviews);
    }
    catch (error) {
        return NextResponse.json({ error: "Failed to get reviews" }, { status: 500 });
    }
}

// POST: Adiciona um novo review
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, github, role, linkedin, review } = body;

        if (!name || !review) {
            return NextResponse.json({ error: "Name and Review are required!" }, { status: 400 });
        }

        // //criando o model da IA
        // const getAi = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
        // const model = getAi.getGenerativeModel({
        //     model: "gemini-pro"
        // })

        // const prompt = `
        //                     Avalie o texto ou palavra abaixo e determine se ele está elogiando (positivo) ou criticando/xingando (negativo). 
        //                     Considere o contexto e avalie mesmo que seja apenas uma palavra.

        //                     Se for uma única palavra, analise se ela é pejorativa, ambígua ou escrita com erros (ex.: "lxio" para "lixo", "botsa" para "bosta"). 
        //                     Esforce-se para interpretar o possível significado antes de classificar.

        //                     Retorne true se o texto ou palavra for positivo e false se for uma crítica, xingamento ou tiver conotação negativa, incluindo palavras mal escritas que possam ser entendidas como pejorativas.

        //                     Texto ou palavra para avaliação: "${review}"
        //                     `;

        // const result = await model.generateContent(prompt);
        // const response = await result.response;
        // const output = await response.text();

        // if (output === "false") {
        //     return NextResponse.json("Comentário inapropriado", { status: 500 });
        // }

        const newReview = {
            id: reviewsLength() + 1,
            review,
            name,
            github,
            role,
            linkedin,
            createdAt: new Date().toISOString(),
            status: false
        };

        addReview(newReview);

        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}


export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: "ID is required to edit the review!" }, { status: 400 });
        }

        editReview(id);
        return NextResponse.json({ message: "Review updated successfully" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

// DELETE: Deleta um review pelo ID
export async function DELETE(request: Request) {
    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: "ID is required to delete the review!" }, { status: 400 });
        }
        
        deleteReview(parseInt(id));
        return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
