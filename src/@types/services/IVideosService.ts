import { Comment } from "../../models/commentEntity";
import { Video } from "../../models/videoEntity";
import {  CommentVideoDTO } from "../dto/CommentDto";
import { FileDto } from "../dto/FileDto";
import { VideoDTO, videosRequestDTO } from "../dto/VideosDto";

export interface IVideosService{
    upload(videoData : videosRequestDTO):Promise<Video>
    findAll(): Promise<Video[]>;
    findOne(id: string): Promise<FileDto>;
    update(id: string, videoDto: VideoDTO): Promise<Video>;
    delete(id: string): Promise<void>;  
    findComments(id:string):Promise<Video>
    sendComment(comment: CommentVideoDTO):Promise<Comment>
}