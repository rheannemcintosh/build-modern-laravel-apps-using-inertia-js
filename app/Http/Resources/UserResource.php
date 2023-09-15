<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'created_at' => $this->created_at,
            'email' => $this->when(Auth::user()->is($this->resource), $this->email),
            'can' => [
                'update' => Auth::user()->can('update', $this->resource)
            ],
            'links' => [
                'profile' => url('/profiles/' . $this->id)
            ]
        ];
    }
}
