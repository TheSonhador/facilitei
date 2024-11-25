<?php

namespace App\Http\Controllers;

use App\Models\Videos_educacionais;
use Illuminate\Http\Request;

class VideosEducacionaisController extends Controller
{
    public function index()
    {
        $videos = Videos_educacionais::all();
        return $videos;
    }

    public function store(Request $request)
    {
        $video_url = (string) $request->input('video_url'); //pode ser "get" no lugar de input
        $video_tema = (string) $request->input('video_tema'); //pode ser "get" no lugar de input
        $video_descricao = (string) $request->input('video_descricao');
        $videos = Videos_educacionais::create(['video_url' => $video_url, 'video_tema' => $video_tema, 'video_descricao' => $video_descricao]);
        $id = $videos->id;
        return response(
            ['location' => route('videos.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Videos_educacionais $video)
    {
        return $video;
    }

    public function update(Request $request, Videos_educacionais $video)
    {
        $video_url = (string) $request->input('video_url');
        $video_tema = (string) $request->input('video_tema');
        $video_descricao = (string) $request->input('video_descricao');
        if ($video_url)
            $video->video_url = $video_url;
        if ($video_tema)
            $video->video_tema = $video_tema;
        if ($video_descricao)
            $video->video_descricao = $video_descricao;
        $video->save();
    }

    public function destroy(Videos_educacionais $video)
    {
        $video->delete();
    }
}
