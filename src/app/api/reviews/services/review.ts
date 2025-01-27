import { prisma } from "@/libs/prisma/prisma";
import { Review } from "@/types/reviews";

const ReviewService = {
  create: async (obj: Review) => {
    const { name, role, review, github, linkedin } = obj;

    try {
      const newReview = await prisma.review.create({
        data: {
          name,
          review,
          github,
          linkedin,
          role,
        },
      });

      return newReview;
    } catch (error) {
      console.error("Erro ao criar o review:", error);
      throw new Error("Não foi possível criar o review.");
    }
  },

  edit: async (id: number, obj: Partial<Review>) => {
    try {
      const updatedReview = await prisma.review.update({
        where: { id },
        data: obj,
      });

      return updatedReview;
    } catch (error) {
      console.error("Erro ao editar o review:", error);
      throw new Error("Não foi possível editar o review.");
    }
  },

  delete: async (id: number) => {
    try {
      const updatedReview = await prisma.review.delete({
        where: { id }
      });

      return updatedReview;
    } catch (error) {
      console.error("Erro ao editar o review:", error);
      throw new Error("Não foi possível editar o review.");
    }
  },

  list: async () => {
    try {
      const reviews = await prisma.review.findMany();
      return reviews;
    } catch (error) {
      console.error("Erro ao listar os reviews:", error);
      throw new Error("Não foi possível listar os reviews.");
    }
  },
};

export default ReviewService;
