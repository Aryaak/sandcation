<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hostel extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'category_id',
        'photo',
        'name',
        'address',
        'price',
        'description',
        'type',
        'phone'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'hostel_id', 'id');
    }

    public function services()
    {
        return $this->hasMany(Service::class, 'hostel_id', 'id');
    }

    public function getPhotoAttribute($value)
    {
        return url('storage/' . $value);
    }
}
