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
|name|string|null: false, index: true|
|@email|string|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :messases
- has_many :groups, through: :gurops_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
- belongs_to :user
- has_many :messases
- has_many :users, through: :gurops_users

## messasesテーブル

|Column|Type|Options|
|------|----|-------|
|photop|text|null: false, foreign_key: true|
|user_id|integer|null: false, class_name: true|
|group_id|integer|null: false, class_name: true|
|text|text|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :messases


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, source: true|

### Association
- belongs_to :user
- belongs_to :group