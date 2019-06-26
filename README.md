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
|name|string|null: false, foreign_key: true|

### Association
- has_many :group
- has_many :messase


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :messase:


## messasesテーブル

|Column|Type|Options|
|------|----|-------|
|photop|text|null: false, foreign_key: true|
|user_id|integer|null: false, class_name: true|
|group_id|integer|null: false, class_name: true|
|text|text|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :messase


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, source: true|

### Association
- belongs_to :user
- belongs_to :user