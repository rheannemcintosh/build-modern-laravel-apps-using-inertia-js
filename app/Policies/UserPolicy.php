<?php

namespace App\Policies;

use App\Models\User;
use Auth;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    public function create(User $user): bool
    {
        return $user->email === 'rheannemcintosh@outlook.com';
    }

    public function update(User $user, User $model)
    {
        return (bool) mt_rand(0, 1);
    }
}
