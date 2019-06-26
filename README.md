# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index true, unique: true|

### Association
- has_many :messases
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :messases
- has_many :groups_users 
- has_many :users, through: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|string| |
|user_id|references| foreign_key:true|
|group_id|references| foreign_key: true|
|content|text| |

### Association
- belongs_to :user
- belongs_to :groups


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references| foreign_key: true|
|group_id|references| foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group