# first run zooker image with dockeeper in the port 2181

### docker run -p 2181:2181 zookeeper


# run kafka with port 9092

### docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.0.8:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.0.8:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka

# 3 parts 


1. Admin

## responsible for partioning and topics


2. producer

## produce the message 

3. Consumer 

## consume the messege of the producer

