#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

typedef enum {
    tagInt32 = 0,
    tagInt64,
    tagFloat32,
    tagFloat64,
    ntypes,
} Tag;

typedef struct
{
    void *data;
    size_t size;
    Tag tag;
} Type;

#define MAKE_TYPE(NAME, CTYPE)                      \
    Type *make_##NAME(CTYPE data)                   \
    {                                               \
        Type *type;                                 \
        type = (Type *)malloc(sizeof(Type));        \
        type->size = sizeof(CTYPE);                 \
        type->data = (void *)malloc(sizeof(CTYPE)); \
        type->tag = tag##NAME;                      \
        CTYPE *temp_ptr = (CTYPE *)type->data;      \
        *temp_ptr = data;                           \
        return type;                                \
    }

MAKE_TYPE(Int32, int32_t)
MAKE_TYPE(Int64, int64_t)
MAKE_TYPE(Float32, float)
MAKE_TYPE(Float64, double)

void type_free(Type *type)
{
    free(type->data);
    free(type);
}

typedef int (*FuncType)(Type *a, Type *b);

// int32 float32
int Func_0x001(Type *a, Type *b)
{
    int32_t *a_data = a->data;
    float *b_data = b->data;

    printf("input: int32 %d, float32 %f", *a_data, *b_data);
    return 0;
}

// int32 int64
int Func_0x102(Type *a, Type *b)
{
    int32_t *a_data = a->data;
    int64_t *b_data = b->data;

    printf("input: int32 %d, int64 %ld", *a_data, *b_data);
    return 0;
}

// int64 int64
int Func_0x013(Type *a, Type *b)
{
    int64_t *a_data = a->data;
    int64_t *b_data = b->data;

    printf("input: int64 %ld, int64 %ld", *a_data, *b_data);
    return 0;
}

// int32 float64
int Func_0x010(Type *a, Type *b)
{
    int32_t *a_data = a->data;
    double *b_data = b->data;

    printf("input: int32 %d, float64 %lf", *a_data, *b_data);

    return 0;
}

int fallback()
{
    printf("Error: MethodError: No method match input type\n");
    exit(-1);
    return 0;
}

FuncType FUNC_CALL_LIST[ntypes][ntypes] = {
    {
        NULL,        // int32 int32
        &Func_0x102, // int32 int64
        &Func_0x001, // int32 float32
        &Func_0x010, // int32 float64
    },

    {
        NULL,        // int64 int32
        &Func_0x013, // int64 int64
        NULL,        // int64 float32
        NULL,        // int64 float64
    },

    {
        NULL, // float32 int32
        NULL, // float32 int64
        NULL, // float64 int32
        NULL, // float64 int64
    },
};

int FuncEntry(Type *a, Type *b)
{
    FuncType func_ptr = FUNC_CALL_LIST[a->tag][b->tag];

    if (func_ptr != NULL)
        (*func_ptr)(a, b);
    else
        return fallback();
}

int main()
{
    Type *a = make_Int32(2);
    Type *b = make_Float32(1.0);
    FuncEntry(a, b);
    type_free(a);
    type_free(b);

    printf("\n");

    a = make_Int64(2);
    b = make_Int64(3);
    FuncEntry(a, b);
    type_free(a); type_free(b);

    printf("\n");
    a = make_Float32(2.0);
    b = make_Float64(2.0);
    FuncEntry(a, b);
    type_free(a); type_free(b);
    return 0;
}
