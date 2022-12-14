import { Router } from "express";
import Container from "typedi";

import { CommentController } from "../controllers/CommentController";
import { adminOrTeacherAuthMiddleware } from "../middleware/adminOrTeacherAuthMiddleware";
import { allUserAuthMiddleware } from "../middleware/allUserAuthMiddleware";
import { errorMiddleware } from "../middleware/errorHandler";

const router = Router();

const getController = (): CommentController => {
  return Container.get<CommentController>("CommentController");
};

const createCommentRouter = () => {
  router.get("", (req, res) => getController().findAll(req, res));
  router.post("", (req, res) => getController().create(req, res));
  router.get("/:id", (req, res) => getController().find(req, res));
  router.put("/:id", (req, res) => getController().update(req, res));
  router.patch("/:id/upvote", (req, res) => getController().patchUpvote(req, res));
  router.patch("/:id/downvote", (req, res) => getController().patchDownvote(req, res));
  router.get("/:id/user", (req, res) => getController().findUserComment(req, res));
  router.delete("/:id", (req, res) => getController().delete(req, res));

  return router;
};

export default createCommentRouter;
