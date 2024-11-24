import fs from 'fs';
import path from 'path';

// Caminho do arquivo JSON
const reviewsFilePath = path.join(process.cwd(), '/src/app/data', 'review.json');

// Função para ler os reviews do arquivo
export const readReviews = (): any[] => {
    if (!fs.existsSync(reviewsFilePath)) {
        return [];
    }

    const reviewsData = fs.readFileSync(reviewsFilePath, 'utf-8');

    if (reviewsData.trim() === '') {
        return [];
    }

    try {
        return JSON.parse(reviewsData);
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON:", error);
        return [];
    }
};

export const reviewsLength = (): number => {
    return readReviews().length;
};

// Função para salvar os reviews no arquivo
export const saveReviews = (reviews: any[]): void => {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), 'utf-8');
};

// Função para adicionar um novo review
export const addReview = (newReview: any): any => {
    const reviews = readReviews();
    reviews.push(newReview);
    saveReviews(reviews);

    return newReview;
};
