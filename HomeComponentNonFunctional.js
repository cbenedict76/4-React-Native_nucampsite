function RenderItem({ item }) {
  if (item) {
    return (
      <Card>
        featuredTitle={item.name}
        image={require('./images/react-lake.jpg')}
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}


non functional